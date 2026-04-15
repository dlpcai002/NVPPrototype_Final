# RiskLens Project Overview

This document summarizes the architecture, components, and features implemented for the RiskLens application.

## Core Architecture
The application uses **React (TypeScript)** with a state-driven view management system. Navigation is handled by conditional rendering based on the `view` state in `App.tsx`, providing a seamless transition between the login flow and the specialized user dashboards.

## 1. Authentication & Onboarding Flow

### Login (`src/components/Login.tsx`)
- **Features:** 
    - Username and password inputs.
    - Password visibility toggle using `Eye`/`EyeOff` icons.
    - Role-based redirection logic:
        - Usernames containing `LR` or `lr` -> **Lender/Regulator Portal**.
        - All other usernames -> **SME Dashboard**.
    - Link to the account creation flow.

### Create Account (`src/components/CreateAccount.tsx`)
A 3-step progress-tracked onboarding flow:
- **Step 1: Basic Identity**
    - Fields: Full Name, Work Email, Phone Number.
    - Feature: Phone number pre-filled with `+27` prefix and restricted to numeric input.
- **Step 2: Business Profile**
    - Fields: Registered Business Name, Registration Number (numeric only), Business Type (descriptive dropdown), and Headquarters Address.
- **Step 3: Account Role & Consent**
    - Role Selection: SME/Start-up or Lender/Regulator cards.
    - Data Hosting: Fixed to "South Africa".
    - Consent Hooks: "Authorize Read-Only Access" toggles for Financials, Infrastructure, and Identity.
    - Legal Summary: Simplified "Why" and "What" split-pane view.
    - Password Creation: Masked input with confirm password validation.

### Email Verification (`src/components/VerifyEmail.tsx`)
- **Features:**
    - Simulated 4-digit code entry.
    - Restricts input to 4 numeric digits.
    - Redirects back to Login upon "verification".

## 2. SME Dashboard (`src/App.tsx`)
The SME view features a bottom-navigation layout with four primary tabs:

- **Dashboard:** Main overview (existing).
- **Risk Intelligence:** Advanced risk analytics (existing).
- **Compliance Shield:** Regulatory tracking (existing).
- **Business Information (`src/components/BusinessInfo.tsx`):**
    - **Document Vault:** Drag-and-drop zone for uploading official docs.
    - **Account Access:** Management cards for connected bank accounts and security permissions.
    - **External Integrations:** Status tracking for Xero and AWS.

## 3. Lender/Regulator Portal (`src/components/LenderDashboard.tsx`)
A specialized view for high-level users to oversee the ecosystem:
- **Features:**
    - Global search for registered SMEs.
    - SME Cards: Displays business type and "Trust Score".
    - Action: "Request Audit Forms" button for individual businesses.
    - Integrated Logout: Top-bar navigation to return to the login screen.

## Technical Details
- **Icons:** Powered by `lucide-react`.
- **Styling:** Vanilla CSS in `src/App.css` (custom cards, toggle switches, pulse animations, and responsive layouts).
- **Input Security:** Explicit text coloring for visibility and regex-based numeric enforcement on sensitive fields.
- **Scrolling:** The `login-container` is optimized with `min-height: 100vh` and vertical overflow to ensure long forms (like Step 3) remain accessible on all screen sizes.
