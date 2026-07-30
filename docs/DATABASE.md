# LafiyaTrack MVP Database Design

## User

| Field | Type |
|------|------|
| id | UUID |
| full_name | String |
| username | String |
| role | String |
| facility | String |
| state | String |
| lga | String |

---

## Outreach Session

| Field | Type |
|------|------|
| id | UUID |
| programme | String |
| activity_type | String |
| village | String |
| date | Date |
| status | Active / Completed / Synced |
| user_id | UUID |

---

## Household

| Field | Type |
|------|------|
| id | UUID |
| outreach_id | UUID |
| head_name | String |
| caregiver | String |
| phone | String |
| village | String |
| landmark | String |

---

## Child

| Field | Type |
|------|------|
| id | UUID |
| household_id | UUID |
| first_name | String |
| last_name | String |
| sex | Male/Female |
| dob | Date |
| estimated_age_months | Integer |

---

## Screening

| Field | Type |
|------|------|
| id | UUID |
| child_id | UUID |
| muac | Number |
| edema | Boolean |
| weight | Number |
| height | Number |
| nutrition_status | Normal/MAM/SAM |
| screening_date | Date |

---

## Referral

| Field | Type |
|------|------|
| id | UUID |
| child_id | UUID |
| facility | String |
| reason | String |
| referral_date | Date |
| status | Pending/Completed |

---

## Follow-up

| Field | Type |
|------|------|
| id | UUID |
| child_id | UUID |
| followup_date | Date |
| notes | String |
| completed | Boolean |
