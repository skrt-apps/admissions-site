import uuid
from datetime import datetime
from typing import Literal

from pydantic import BaseModel


class DiagnosticSubmissionCreate(BaseModel):
    student_name: str | None = None
    email: str | None = None
    phone: str | None = None
    curriculum: str | None = None
    intended_major: str | None = None
    predicted_score: str | None = None
    sat_score: str | None = None
    target_universities: str | None = None
    research_summary: str | None = None
    extracurriculars: str | None = None

    grade: Literal["g10", "g11", "g12"]
    citizenship: Literal["india", "us"]
    major: Literal["stem", "finance", "humanities"]
    archetype: Literal["specialist", "polymath", "tree"]
    academic: Literal["high", "mid", "low"]
    testing: Literal["high", "mid", "low"]

    utm_source: str | None = None
    utm_medium: str | None = None
    utm_campaign: str | None = None
    referrer: str | None = None
    user_agent: str | None = None


class DiagnosticSubmissionOut(BaseModel):
    id: uuid.UUID
    created_at: datetime

    student_name: str | None
    email: str | None
    phone: str | None
    curriculum: str | None
    intended_major: str | None
    predicted_score: str | None
    sat_score: str | None
    target_universities: str | None
    research_summary: str | None
    extracurriculars: str | None

    grade: str | None
    citizenship: str | None
    major: str | None
    archetype: str | None
    academic: str | None
    testing: str | None

    result_tier: str | None
    result_status: str | None
    result_vulnerability: str | None
    result_project: str | None
    result_checklist: str | None

    model_config = {"from_attributes": True}
