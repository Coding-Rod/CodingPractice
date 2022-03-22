# Python
from typing import Optional
from enum import Enum

# Pylantic
from pydantic import BaseModel, EmailStr, Field # type: ignore

# FastAPI
from fastapi import FastAPI, File, Form, Header, Cookie, UploadFile # type: ignore
from fastapi import HTTPException
from fastapi import Body, Query, Path
from fastapi import status # HTTP status codes

app = FastAPI()

#! Models
class HairColor(Enum): # Hair color model validator
    white = "white"
    brown = "brown"
    black = "black"
    blonde = "blonde"
    red = "red"
    
#region Person
class PersonBase(BaseModel):
    person_id: int = Field(
        ...,
        gt=0,
        example = 123
    )
    first_name: str = Field(
        ...,
        min_length=1,
        max_length=50,
        example="Rodrigo"
    )
    last_name: str = Field(
        ...,
        min_length=1,
        max_length=50,  
        example="Fernandez"
    )
    age: int = Field(
        ...,
        gt=0,
        le=115,
        example="22"
    )
    hair_color: Optional[HairColor] = Field(default=None, example="brown")
    is_married: Optional[bool] = Field(default=None, example=False)
    #region class config
    # class Config:
    #     schema_extra = {
    #         "example": {
    #             "first_name": "Facundo",
    #             "last_name": "Garcia",
    #             "age": 21,
    #             "hair_color": "blonde",
    #             "is_married": False
    #         }
    #     }
    #endregion class config

class Person(PersonBase):
    password: str = Field(..., min_length=8)
    
class PersonOut(PersonBase):
    pass
#endregion Person

class Location(BaseModel):
    city: str = Field(default=None, example="La Paz")
    state: str = Field(default=None, example="Murillo")
    country: str = Field(default=None, example="Bolivia")

class LoginOut(BaseModel):
    username: str = Field(..., example="miguel2022", max_length=20)
    message: str = Field(default="Login successfully")

#! Operations

@app.get(
    path="/",
    status_code=status.HTTP_200_OK,
    tags=["Home"]
    ) # Path operation decorator
def home() -> dict: # Path operation function
    return {"Hello":"world"}

# Request and Response Body
#// @app.post("/person/new", response_model=Person, response_model_exclude={"password"})
@app.post(
    path="/person/new", 
    response_model=PersonOut,
    status_code=status.HTTP_201_CREATED,
    tags=["Persons"],
    summary="Create Person in the app"
    )
def create_person(person: Person = Body(...)) -> Person: # (...) = obligatorio    
    """
    Create Person

    This path operation creates a person in the app and save the information in the database  
    
    Args:
    - Request body path:
        - **person: Person ->** A person model with:
            - First name
            - Last name
            - Age
            - Hair color
            - Marital status

    Returns:
    - Person model with:
        - First name
        - Last name
        - Age
        - Hair color
        - Marital status
    """    
    return person

# Validations: Query Parameters
@app.get(
    path="/person/detail",
    status_code=status.HTTP_200_OK,
    tags=["Persons"],
    deprecated=True
    )
def show_person(
    name: Optional[str] = Query(
        None, 
        min_length=1, 
        max_length=50,
        title = "Person Name",
        description = "This is the person's name. It is between 1 and 50 characters",
        example="Rocio"
        ),
    age: str = Query(
        ...,
        title = "Person Age",
        description = "This is the person's age. It is required",
        example=25
        ),
) -> dict:
    return {
        "name": name,
        "age": age
    }
    
# Validations: Path Parameters
persons = [1, 2, 3, 4, 5]

@app.get(
    path="/person/detail/{person_id}",
    status_code=status.HTTP_200_OK,
    tags=["Persons"]
    )
def show_person( 
    person_id: int = Path(
        ...,
        gt=0,
        title = "Person id",
        description = "This is the person's id. It is required",
        example=123
        ) 
) -> dict:
    if person_id not in persons:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="This person doesn't exist!"
        )
    return {person_id: "It exists!"}

# Validations: Body Parameters
@app.put(
    path="/person/{person_id}",
    status_code=status.HTTP_202_ACCEPTED,
    tags=["Persons"]
    )
def update_person(
    person_id: int = Path(
        ...,
        title = "Person id",
        description = "This is the person's id",
        gt=0,
        example=123
    ),
    person: Person = Body(...),
    location: Location = Body(...)
) -> dict:
    return person.dict() | location.dict()
    # return person

# Forms
@app.post(
    path="/login",
    response_model=LoginOut,
    status_code=status.HTTP_200_OK,
    tags=["Persons"]
)
def login(username: str = Form(...), password: str = Form(...)):
    return LoginOut(username=username)

# Cookies and Headers Parameters
@app.post(
    path="/contact",
    status_code=status.HTTP_200_OK,
    tags=["Contact"]
)
def contact(
    first_name: str = Form(
        ...,
        max_length=20,
        min_length=1
    ),
    last_name: str = Form(
        ...,
        max_length=20,
        min_length=1
    ),
    email: EmailStr = Form(...),
    message: str = Form(
        ...,
        min_length=20
    ),
    user_agent: Optional[str] = Header(default=None),
    ads: Optional[str] = Cookie(default=None)
):
    return user_agent

# Files

@app.post(
    path="/post-image",
    tags=["Files"]
)
def post_image(
    image: UploadFile = File(...)
):
    return {
        "filename": image.filename,
        "Format": image.content_type,
        "Size(kb)": round(len(image.file.read())/1024, ndigits=2)
    }