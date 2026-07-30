from typing import Optional

from sqlmodel import Field

from .base import BaseModel


class User(BaseModel, table=True):

    id: Optional[int] = Field(default=None, primary_key=True)

    full_name: str

    username: str

    hashed_password: str

    facility: str

    role: str
