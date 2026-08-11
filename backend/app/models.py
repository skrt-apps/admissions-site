import uuid
from datetime import datetime

from sqlalchemy import DateTime, Text, func
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column

from .db import Base


class DiagnosticSubmission(Base):
    __tablename__ = "diagnostic_submissions"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    # Student profile (free-text inputs)
    student_name: Mapped[str | None] = mapped_column(Text)
    email: Mapped[str | None] = mapped_column(Text)
    phone: Mapped[str | None] = mapped_column(Text)
    curriculum: Mapped[str | None] = mapped_column(Text)
    intended_major: Mapped[str | None] = mapped_column(Text)
    predicted_score: Mapped[str | None] = mapped_column(Text)
    sat_score: Mapped[str | None] = mapped_column(Text)
    target_universities: Mapped[str | None] = mapped_column(Text)
    research_summary: Mapped[str | None] = mapped_column(Text)
    extracurriculars: Mapped[str | None] = mapped_column(Text)

    # Diagnostic parameters (enum-ish selects)
    grade: Mapped[str | None] = mapped_column(Text)
    citizenship: Mapped[str | None] = mapped_column(Text)
    major: Mapped[str | None] = mapped_column(Text)
    archetype: Mapped[str | None] = mapped_column(Text)
    academic: Mapped[str | None] = mapped_column(Text)
    testing: Mapped[str | None] = mapped_column(Text)

    # Computed result snapshot
    result_tier: Mapped[str | None] = mapped_column(Text)
    result_status: Mapped[str | None] = mapped_column(Text)
    result_vulnerability: Mapped[str | None] = mapped_column(Text)
    result_project: Mapped[str | None] = mapped_column(Text)
    result_checklist: Mapped[str | None] = mapped_column(Text)

    # Attribution
    utm_source: Mapped[str | None] = mapped_column(Text)
    utm_medium: Mapped[str | None] = mapped_column(Text)
    utm_campaign: Mapped[str | None] = mapped_column(Text)
    referrer: Mapped[str | None] = mapped_column(Text)
    user_agent: Mapped[str | None] = mapped_column(Text)
