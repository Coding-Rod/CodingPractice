# Python
from typing import Optional
from enum import Enum

# Pylantic
from pydantic import BaseModel, Field # type: ignore

# FastAPI
from fastapi import FastAPI # type: ignore
from fastapi import Body, Query, Path

app = FastAPI()

#! Models
class HairColor(Enum): # Hair color model validator
    white = "white"
    brown = "brown"
    black = "black"
    blonde = "blonde"
    red = "red"
    
class Person(BaseModel):
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

class Location(BaseModel):
    city: str = Field(default=None, example="La Paz")
    state: str = Field(default=None, example="Murillo")
    country: str = Field(default=None, example="Bolivia")

#! Operations

@app.get("/") # Path operation decorator
def home() -> dict: # Path operation function
    return {"Hello":"world"}

# Request and Response Body

@app.post("/person/new")
def create_person(person: Person = Body(...)) -> Person: # (...) = obligatorio
    return person

# Valitions: Query Parameters

@app.get("/person/detail")
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
        ) 
) -> dict:
    return {
        "name": name,
        "age": age
    }
    
# Valitions: Path Parameters

@app.get("/person/detail/{person_id}")
def show_person_by_id(
    person_id: int = Path(
        ...,
        gt=0,
        title = "Person id",
        description = "This is the person's id. It is required",
        example=123
        )
) -> dict:
    return {person_id: "It exists!"}

# Valitions: Body Parameters
@app.put("/person/{person_id}")
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