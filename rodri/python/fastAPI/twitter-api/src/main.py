# Python
import json
from datetime import date, datetime
from re import U
from typing import List, Optional
from enum import Enum
from uuid import UUID

# Pylantic
from pydantic import BaseModel, EmailStr, Field # type: ignore

# FastAPI
from fastapi import FastAPI, HTTPException # type: ignore
from fastapi import Body, Query, Path
from fastapi import status # HTTP status codes

#! Instance
app = FastAPI()

#region Models

class UserBase(BaseModel):
    user_id: UUID = Field(...)
    email: EmailStr = Field(...)
    
class User(UserBase):
    first_name: str = Field(
        ...,
        min_length=1,
        max_length=50
    )
    last_name: str = Field(
        ...,
        min_length=1,
        max_length=50
    )
    birth_date: Optional[date] = Field(default=None)
    
class UserLogin(UserBase):
    password: str = Field(
        ...,
        min_length=8,
        max_length=64
    )

class UserRegister(User, UserLogin):
    pass

class Tweet(BaseModel):
    tweet_id: UUID = Field(...)
    content: str = Field(
        ...,
        min_length=1,
        max_length=256
    )
    created_at: datetime = Field(default=datetime.now())
    updated_at: Optional[datetime] = Field(default=None)
    by: User = Field(...)

#endregion Models

#region Path Operations

#region Users
@app.post(
    path="/signup",
    response_model=User,
    status_code=status.HTTP_201_CREATED,
    summary="Register a User",
    tags=["Users"]
)
def signup(user: UserRegister = Body(...)):
    """
    This path operation register a user in the app
    
    - Parameters:
        - Request body parameter
            -user: UserRegister
            
    - Returns a json with the basic user information:
        - user_id: UUID
        - email: EmailStr
        - first_name: str
        - last_name: str
        - birth_date: date
    """    
    with open("./data/users.json", "r+", encoding="utf-8") as f:
        results = json.loads(f.read())
        
        # Convert request body to dictionary
        user_dict = user.dict()
        
        # Convert exotic type variables to strings
        user_dict['user_id'] = str(user_dict['user_id'])
        user_dict['birth_date'] = str(user_dict['birth_date'])
        
        # Join results and user_dict
        results.append(user_dict)
        
        # File operations
        f.seek(0)
        f.write(json.dumps(results))
        
        # Response
        return user

@app.post(
    path="/login",
    response_model=User,
    status_code=status.HTTP_200_OK,
    summary="Login a User",
    tags=["Users"]
)
def login():
    pass

@app.get(
    path="/users",
    response_model=List[User],
    status_code=status.HTTP_200_OK,
    summary="Show_all_users",
    tags=["Users"]
)
def show_all_users():
    """
    This path operation shows all users in the app
    
    - Parameters: None

    - Returns a json list with all users in the app, with the following keys:
        - user_id: UUID
        - email: EmailStr
        - first_name: str
        - last_name: str
        - birth_date: date
    """    
    with open("./data/users.json", "r", encoding="utf-8") as f:
        results = json.loads(f.read())
        return results
    
@app.get(
    path="/users/{user_id}",
    response_model=User,
    status_code=status.HTTP_200_OK,
    summary="Show a User",
    tags=["Users"]
)
def show_a_user(
    user_id: str = Path(
        ..., 
        title = "Show a user",
        description = "This functions shows a user based on a unique user id",
        example = "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    )
):
    with open("./data/users.json", "r", encoding="utf-8") as f:
        results = json.loads(f.read())
        
        user: int = None
        
        for i,j in enumerate(results):
            if user_id == str(j['user_id']):
                user = i
                break
            
        if user >= 0:
            return results[user]
        else:
            raise HTTPException(status.HTTP_404_NOT_FOUND, "User not found")

@app.delete(
    path="/users/{user_id}/delete",
    response_model=User,
    status_code=status.HTTP_200_OK,
    summary="Delete a User",
    tags=["Users"]
)
def delete_a_user(
    user_id: str = Path(
        ..., 
        title = "Modify a user ",
        description = "This functions modifies a user based on a unique user id",
        example = "3fa85f64-5717-4562-b3fc-2c963f66afa8"
    )
):
    with open("./data/users.json", "r+", encoding="utf-8") as f:
        results = json.loads(f.read())
        
        user_index: int = None
        
        for i,j in enumerate(results):
            if user_id == str(j['user_id']):
                user_index = i
                break
        
        if user_index >= 0:
            deleted = dict(results[user_index])
            del results[user_index]
        else:
            raise HTTPException(status.HTTP_404_NOT_FOUND, "User not found")
        
        f.seek(0)
        f.write(json.dumps(results))
        f.truncate()        
        
        return deleted

@app.put(
    path="/users/{user_id}/update",
    response_model=User,
    status_code=status.HTTP_200_OK,
    summary="Update a User",
    tags=["Users"]
)
def update_a_user(
    user_id: str = Path(
        ..., 
        title = "Modify a user ",
        description = "This functions modifies a user based on a unique user id",
        example = "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    ),
    user: User = Body(...)
):
    with open("./data/users.json", "r+", encoding="utf-8") as f:
        results = json.loads(f.read())
        
        user_index: int = None
        
        for i,j in enumerate(results):
            if user_id == str(j['user_id']):
                user_index = i
                break
        
        if user_index >= 0:
            results[user_index]['first_name'] = user.dict()['first_name']
            results[user_index]['last_name'] = user.dict()['last_name']
            results[user_index]['birth_date'] = str(user.dict()['birth_date'])
        else:
            raise HTTPException(status.HTTP_404_NOT_FOUND, "User not found")
        
        f.seek(0)
        f.write(json.dumps(results))
        f.truncate()        
        
        return results[user_index]

#endregion Users

#region Tweets

@app.get(
    path="/",
    response_model=List[Tweet],
    status_code=status.HTTP_200_OK,
    summary="Show all tweets",
    tags=["Tweets"]
    )
def home():
    """
    This path operation shows all tweets in the app
    
    - Parameters: None

    - Returns a json list with all tweets in the app, with the following keys:
        - tweet_id: UUID
        - content: str
        - created_at: datetime
        - updated_at: Optional[datetime]
        - by: User
    """    
    with open("./data/tweets.json", "r", encoding="utf-8") as f:
        results = json.loads(f.read())
        return results

@app.post(
    path="/post",
    response_model=Tweet,
    status_code=status.HTTP_201_CREATED,
    summary="Post a tweet",
    tags=["Tweets"]
)
def post(tweet: Tweet = Body(...)):
    """
    Post a tweet
    
    This operation post a tweet
    
    - Parameters:
        - Request body parameter
            - tweet: Tweet
    
    - Returns a json with the basic tweet information:
        - tweet_id: UUID
        - content: str
        - created_at: datetime
        - updated_at: Optional[datetime]
        - by: User
    """    
    with open("./data/tweets.json", "r+", encoding="utf-8") as f:
        results = json.loads(f.read())
        
        # Convert request body to dictionary
        tweet_dict = tweet.dict()
        
        # Convert exotic type variables to strings
        tweet_dict['tweet_id'] = str(tweet_dict['tweet_id'])
        tweet_dict['created_at'] = str(tweet_dict['created_at'])
        if tweet_dict['updated_at']:
            tweet_dict['updated_at'] = str(tweet_dict['updated_at'])
        
        # Convert exotic type variables to strings in the user
        tweet_dict['by']['user_id'] = str(tweet_dict['by']['user_id'])
        tweet_dict['by']['birth_date'] = str(tweet_dict['by']['birth_date'])
        # Join results and tweet_dict
        results.append(tweet_dict)
        
        # File operations
        f.seek(0)
        f.write(json.dumps(results))
        
        # Response
        return tweet

@app.get(
    path="/tweets/{tweet_id}",
    response_model=Tweet,
    status_code=status.HTTP_200_OK,
    summary="Show a tweet",
    tags=["Tweets"]
    )
def show_a_tweet(
    tweet_id: str = Path(
        ..., 
        title = "Show a user",
        description = "This functions shows a user based on a unique user id",
        example = "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    )
):
    with open("./data/tweets.json", "r", encoding="utf-8") as f:
        results = json.loads(f.read())
        
        tweet_index: int = None
        
        print(results)
        
        for i,j in enumerate(results):
            if tweet_id == str(j['tweet_id']):
                tweet_index = i
                break
            
        try:
            return results[tweet_index]
        except:
            raise HTTPException(status.HTTP_404_NOT_FOUND, "User not found")

@app.delete(
    path="/tweets/{tweet_id}/delete",
    response_model=Tweet,
    status_code=status.HTTP_200_OK,
    summary="Delete a tweet",
    tags=["Tweets"]
    )
def delete_a_tweet(
    tweet_id: str = Path(
        ..., 
        title = "Delete a tweet ",
        description = "This functions modifies a tweet based on a unique user id",
        example = "3fa85f64-5717-4562-b3fc-2c963f66afa8"
    )
):
    with open("./data/tweets.json", "r+", encoding="utf-8") as f:
        results = json.loads(f.read())
        
        tweet_index: int = None
        
        for i,j in enumerate(results):
            if tweet_id == str(j['tweet_id']):
                tweet_index = i
                break
        
        if tweet_index >= 0:
            deleted = dict(results[tweet_index])
            del results[tweet_index]
        else:
            raise HTTPException(status.HTTP_404_NOT_FOUND, "Tweet not found")
        
        f.seek(0)
        f.write(json.dumps(results))
        f.truncate()        
        
        return deleted

@app.put(
    path="/tweets/{tweet_id}/update",
    response_model=Tweet,
    status_code=status.HTTP_200_OK,
    summary="Update a tweet",
    tags=["Tweets"]
    )
def update_a_tweet(
    tweet_id: str = Path(
        ..., 
        title = "Modify a tweet ",
        description = "This functions modifies a tweet based on a unique tweet id",
        example = "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    ),
    content: str = Query(
        ...,
        min_length=1,
        max_length=256
    )
):
    with open("./data/tweets.json", "r+", encoding="utf-8") as f:
        results = json.loads(f.read())
        
        tweet_index: int = None
        
        for i,j in enumerate(results):
            if tweet_id == str(j['tweet_id']):
                tweet_index = i
                break
        
        if tweet_index >= 0:
            results[tweet_index]['content'] = content
            results[tweet_index]['updated_at'] = str(datetime.now())
        else:
            raise HTTPException(status.HTTP_404_NOT_FOUND, "Tweet not found")
        
        f.seek(0)
        f.write(json.dumps(results))
        f.truncate()        
        
        return results[tweet_index]

#endregion Tweets

#endregion Path_Operations
