# backend/app/main.py

from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from . import crud, models, schemas
from .database import engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the Agreement API"}

@app.post("/agreements/", response_model=schemas.Agreement)
def create_agreement(agreement: schemas.AgreementCreate, db: Session = Depends(get_db)):
    return crud.create_agreement(db=db, agreement=agreement)

@app.get("/agreements/", response_model=List[schemas.Agreement])
def read_agreements(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    agreements = crud.get_agreements(db, skip=skip, limit=limit)
    return agreements
