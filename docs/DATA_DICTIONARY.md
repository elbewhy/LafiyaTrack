# LafiyaTrack Data Dictionary

This document defines all data fields used in LafiyaTrack.

---

# Table: Users

| Field | Type | Required | Description |
|------|------|----------|-------------|
| id | UUID | Yes | Unique user identifier |
| full_name | Text | Yes | User's full name |
| username | Text | Yes | Login username |
| email | Email | No | User email address |
| phone | Text | Yes | Phone number |
| password_hash | Text | Yes | Encrypted password |
| role | Enum | Yes | CHEW, Supervisor or Admin |
| facility_id | UUID | Yes | Assigned health facility |
| active | Boolean | Yes | Account status |
| created_at | DateTime | Yes | Record creation date |

---

# Table: Households

| Field | Type | Required | Description |
|------|------|----------|-------------|
| id | UUID | Yes | Household identifier |
| household_code | Text | Yes | Auto-generated household code |
| head_name | Text | Yes | Head of household |
| caregiver_name | Text | Yes | Primary caregiver |
| caregiver_phone | Text | No | Phone number |
| village | Text | Yes | Village |
| ward | Text | Yes | Ward |
| lga | Text | Yes | Local Government Area |
| state | Text | Yes | State |
| latitude | Decimal | No | GPS Latitude |
| longitude | Decimal | No | GPS Longitude |
| created_at | DateTime | Yes | Record creation date |

---

# Table: Children

| Field | Type | Required | Description |
|------|------|----------|-------------|
| id | UUID | Yes | Child identifier |
| household_id | UUID | Yes | Household reference |
| lafiyatrack_id | Text | Yes | System generated child ID |
| first_name | Text | Yes | First name |
| last_name | Text | No | Last name |
| sex | Enum | Yes | Male or Female |
| date_of_birth | Date | No | Date of birth |
| estimated_age_months | Integer | Yes | Used when DOB is unknown |
| birth_weight | Decimal | No | Birth weight if known |
| created_at | DateTime | Yes | Registration date |

---

# Table: Nutrition Screening

| Field | Type | Required | Description |
|------|------|----------|-------------|
| id | UUID | Yes | Screening ID |
| child_id | UUID | Yes | Child reference |
| screening_date | Date | Yes | Screening date |
| muac_mm | Decimal | Yes | MUAC measurement in millimetres |
| edema | Boolean | Yes | Bilateral pitting edema |
| weight_kg | Decimal | No | Weight |
| height_cm | Decimal | No | Height |
| nutrition_status | Enum | Yes | Healthy, MAM or SAM |
| referred | Boolean | Yes | Referral required |
| screened_by | UUID | Yes | CHEW |

---

# Table: Referrals

| Field | Type | Required | Description |
|------|------|----------|-------------|
| id | UUID | Yes | Referral ID |
| child_id | UUID | Yes | Child reference |
| facility_id | UUID | Yes | Receiving facility |
| referral_date | Date | Yes | Referral date |
| reason | Text | Yes | Referral reason |
| status | Enum | Yes | Pending, Received, Completed |

---

# Table: Follow-up

| Field | Type | Required | Description |
|------|------|----------|-------------|
| id | UUID | Yes | Follow-up ID |
| child_id | UUID | Yes | Child reference |
| scheduled_date | Date | Yes | Planned visit |
| actual_date | Date | No | Actual visit |
| outcome | Text | No | Visit outcome |
| notes | Text | No | Additional notes |

---

# Table: Outreach Sessions

| Field | Type | Required | Description |
|------|------|----------|-------------|
| id | UUID | Yes | Outreach ID |
| programme | Text | Yes | Programme name |
| activity_type | Enum | Yes | House-to-house, Facility, Community, School, Follow-up, Other |
| state | Text | Yes | State |
| lga | Text | Yes | LGA |
| ward | Text | Yes | Ward |
| village | Text | Yes | Village |
| started_at | DateTime | Yes | Start time |
| ended_at | DateTime | No | End time |
| conducted_by | UUID | Yes | CHEW |
