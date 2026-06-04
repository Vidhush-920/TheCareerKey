
# TheCareerKey
**TheCareerKey** is an interactive web application designed to help individuals discover their ideal career paths using the **RIASEC model** (Realistic, Investigative, Artistic, Social, Enterprising, and Conventional). By analyzing user interests and personality traits, the platform provides scientific career guidance through a digitized, user-friendly interface.

## ✨ Key Features
*   **Secure Entry:** A landing page requiring a **Name** and **NIC Number** to begin the survey.
*   **Multi-Step Survey:** A comprehensive questionnaire divided into sections for Interests and Personality.
*   **Dynamic Visualizations:** A results page featuring **Bar Chart visualizations** (via Chart.js) to represent personality-type strength scores.
*   **Attempt Management (New):** The system detects if a user (via Name/NIC) has a previous attempt. Users are then given the option to:
    *   **View Previous Results:** Retrieve and display scores stored in the database.
    *   **Access Admin Notes:** View personalized notes provided by the website admin for that specific attempt.
    *   **Start New Survey:** Reset and take the assessment again.
*   **Responsive Design:** Optimized for both desktop and mobile devices.
*   **Multi-lingual Functionality:** English (default), Tamil (தமிழ்), Sinhala (සිංහල) translations stored in JSON files, switchable via a dropdown.
*   **Report Download Feature:** Export results as a printable/downloadable PDF (triggered from frontend). 

## 🛠️ Technology Stack
*   **Frontend:** HTML5, CSS3, JavaScript, Bootstrap, jQuery.
*   **Visualization:** Chart.js (Bar Charts).
*   **Backend:** PHP and Hack.
*   **Database:** SQL (MySQL) for storing survey responses, results, and admin notes.

## 📁 Project Structure
*   `/actions`: Logic for survey processing and data handling.
*   `/components`: Reusable UI elements, including the "Notes" and "Exit Modal" features.
*   `/pages`: Application views, including `prev_results.php` for viewing historical data.
*   `amirrpcb_ckey2507.sql`: Database schema for the RIASEC model and user attempts.
*   `db_config.php`: Centralized database configuration.

## ⚙️ Installation & Setup
1.  **Database Setup:**
    *   Import `amirrpcb_ckey2507.sql` into your SQL environment.
    *   Update your credentials in `db_config.php`.
2.  **Deployment:**
    *   Host the project on a PHP-enabled web server (e.g., Apache or WAMP).
    *   Access the application via `index.php`.

## Conclusion
*   The Career Key Survey Web Application provides an engaging, multilingual platform for career exploration. Through clear architecture, visual results, and professional design, it will help users make informed career choices.

---
