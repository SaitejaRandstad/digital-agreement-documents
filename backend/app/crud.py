# backend/app/crud.py

from sqlalchemy.orm import Session
from . import models, schemas

def get_agreements(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Agreement).offset(skip).limit(limit).all()

def create_agreement(db: Session, agreement: schemas.AgreementCreate):
    db_agreement = models.Agreement(**agreement.dict())
    db.add(db_agreement)
    db.commit()
    db.refresh(db_agreement)
    return db_agreement
