# backend/app/models.py

from sqlalchemy import Column, Integer, String, DateTime
from .database import Base

class Agreement(Base):
    __tablename__ = "agreements"

    id = Column(Integer, primary_key=True, index=True)
    client_name = Column(String, index=True)
    agreement_date = Column(DateTime)
    content = Column(String)
