# Python
from typing import Optional

# Pylantic
from pydantic import BaseModel

# FastAPI
from fastapi import FastAPI
from fastapi import Body

app = FastAPI()

# Models
class Person(BaseModel):
    first_name: str
    last_name: str
    age: int
    hair_color: Optional[str] = None
    is_married: Optional[bool] = None

@app.get("/") # Path operation decorator
def home(): # Path operation function
    return {"Hello":"world"}

# Request and Response Body

@app.post("/person/new")
def create_person(person: Person = Body(...)) -> Person: # (...) = obligatorio
    return person