# LafiyaTrack Database Design

## Overview

LafiyaTrack uses a relational database to securely store child nutrition records, referrals, follow-up visits, and user information.

---

# Main Tables

## Users

Stores information about Community Health Extension Workers (CHEWs), Supervisors, and Administrators.

Fields:

- id
- full_name
- email
- phone
- password_hash
- role
- health_facility
- created_at

---

## Households

Stores household information.

Fields:

- id
- household_code
- head_of_household
- village
- ward
- lga
- state
- gps_latitude
- gps_longitude

---

## Children

Stores child information.

Fields:

- id
- household_id
- first_name
- last_name
- sex
- date_of_birth
- caregiver_name
- caregiver_phone
- created_at

---

## Screenings

Stores nutrition screening records.

Fields:

- id
- child_id
- screening_date
- muac
- weight
- height
- edema
- nutrition_status
- screened_by

---

## Referrals

Stores referrals.

Fields:

- id
- screening_id
- health_facility
- referral_reason
- referral_status
- created_at

---

## FollowUps

Stores follow-up visits.

Fields:

- id
- child_id
- followup_date
- notes
- outcome

---

## Synchronization

Tracks offline synchronization.

Fields:

- id
- device_id
- record_type
- record_id
- sync_status
- synced_at
