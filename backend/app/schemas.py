# backend/app/schemas.py

from pydantic import BaseModel
from datetime import datetime

class AgreementBase(BaseModel):
    client_name: str
    agreement_date: datetime
    content: str

class AgreementCreate(AgreementBase):
    pass

class Agreement(AgreementBase):
    id: int

    class Config:
        orm_mode = True
