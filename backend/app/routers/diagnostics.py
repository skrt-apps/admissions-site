import uuid

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from ..db import get_session
from ..diagnostic import evaluate_profile
from ..models import DiagnosticSubmission
from ..schemas import DiagnosticSubmissionCreate, DiagnosticSubmissionOut

router = APIRouter(prefix="/diagnostics", tags=["diagnostics"])


@router.post("", response_model=DiagnosticSubmissionOut, status_code=201)
async def create_diagnostic(
    payload: DiagnosticSubmissionCreate,
    session: AsyncSession = Depends(get_session),
):
    result = evaluate_profile(
        grade=payload.grade,
        citizenship=payload.citizenship,
        major=payload.major,
        academic=payload.academic,
        testing=payload.testing,
    )

    submission = DiagnosticSubmission(
        **payload.model_dump(),
        result_tier=result.tier,
        result_status=result.status,
        result_vulnerability=result.vulnerability,
        result_project=result.project,
        result_checklist=result.checklist,
    )
    session.add(submission)
    await session.commit()
    await session.refresh(submission)
    return submission


@router.get("/{submission_id}", response_model=DiagnosticSubmissionOut)
async def get_diagnostic(
    submission_id: uuid.UUID,
    session: AsyncSession = Depends(get_session),
):
    submission = await session.get(DiagnosticSubmission, submission_id)
    if submission is None:
        raise HTTPException(status_code=404, detail="Report not found")
    return submission
