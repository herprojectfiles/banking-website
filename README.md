## LONDON COMMERCIAL BANK - My Banking Website Assignment

## Introduction
The banking website introduces visitors to **LONDON COMMERCIAL BANK**, providing an interactive and user-friendly platform for exploring the bank's services, tools, and information. The site is fully responsive, catering to both desktop and mobile users (although desktop/tablet is recommended for the best experience).

## Features
1. **Home Page**:
   - Briefly introduces **LONDON COMMERCIAL BANK**.
   - Features a button directing users to the **Mortgage Calculator** page.
   - Includes a footer indicating the bank's establishment year and the current year of operation.

2. **Mortgage Calculator Page**:
   - Allows users to input loan details (e.g., loan amount, term, income).
   - Provides outputs based on the inputted data, including loan eligibility and expense breakdown.

3. **Other Pages**:
   - **About Us**: Comprises bank's mission, values, and history.
   - **Services**: List of banking services.
   - **FAQ**: Answers frequently asked questions about the bank's operations.
   - **Contact Us**: Enables visitors to reach out to customer support using a form and has the bank's physical location.

## Technical Details
- **Responsiveness**:
  - The website is fully responsive, adapting to mobile, tablet, and desktop devices.  
  - Recommended usage on desktop/tablet for the best user experience.

- **Interactivity**:
  - **JavaScript** and **jQuery animations** enhance user interaction.
  - Features such as the FAQ accordion, form validation, and mortgage calculation are powered by JavaScript.

- **Accessibility**:
  - **ARIA roles** have been implemented.

## Files in the ZIP
The ZIP file contains the following components:
- **HTML**: Structured web pages for the site.
- **CSS**: Stylesheets for the website's design and layout.
- **JavaScript**: Scripts for interactive features.

  **Utility Scripts**
- **File Organizer Script**: Organizes files in a directory by their types.
- **Disk Usage Checker Script**: Monitors disk usage and provides warnings for high usage.

## How to Run
1. **Open Locally**
   - Download the ZIP file and extract it.
   - Open `index.html` in a browser to view the site locally.

2. **Utility Scripts**
   - Ensure Python 3.x is installed on your system.
   - Navigate to the `utility-scripts/` folder and run the scripts using Python commands:
     - File Organizer:
       ```bash
       python file_organizer.py /path/to/directory
       ```
     - Disk Usage Checker:
       ```bash
       python disk_usage_checker.py /path/to/directory [threshold]
       ```

