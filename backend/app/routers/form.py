# backend/app/routers/form.py

from fastapi import APIRouter

router = APIRouter()

@router.get("/form")
def read_form():
    return {"message": "This is the form endpoint"}
