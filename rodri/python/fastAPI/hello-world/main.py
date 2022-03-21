# Python
from typing import Optional

# Pylantic
from pydantic import BaseModel

# FastAPI
from fastapi import FastAPI, Body, Query, Path

app = FastAPI()

# Models
class Person(BaseModel):
    first_name: str
    last_name: str
    age: int
    hair_color: Optional[str] = None
    is_married: Optional[bool] = None

class Location(BaseModel):
    city: str
    state: str
    country: str

@app.get("/") # Path operation decorator
def home(): # Path operation function
    return {"Hello":"world"}

# Request and Response Body

@app.post("/person/new")
def create_person(person: Person = Body(...)) -> Person: # (...) = obligatorio
    return person

# Validaciones: Query Parameters

@app.get("/person/detail")
def show_person(
    name: Optional[str] = Query(
        None, 
        min_length=1, 
        max_length=50,
        title = "Person Name",
        description = "This is the person's name. It is between 1 and 50 characters"
        ),
    age: str = Query(
        ...,
        title = "Person Age",
        description = "This is the person's age. It is required"
        ) 
):
    return {
        "name": name,
        "age": age
    }
    
# Validaciones: Path Parameters

@app.get("/person/detail/{person_id}")
def show_person(
    person_id: int = Path(
        ...,
        gt=0,
        title = "Person id",
        description = "This is the person's id. It is required"
        )
):
    return {person_id: "It exists!"}


# Validaciones: Body Parameters
@app.put("/person/{person_id}")
def update_person(
    person_id: int = Path(
        ...,
        title = "Person id",
        description = "This is the person's id",
        gt=0
    ),
    person: Person = Body(...),
    location: Location = Body(...)
):
    return person.dict() | location.dict()