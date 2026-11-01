/**
 * Sci-Teach Library — Google Apps Script Backend (Code.gs)
 * Centralized Digital Resource Hub for USTP SHS STEM Spartans
 *
 * Handles submission requests from the Contributor Portal
 * and automatically appends records to the active Google Sheet.
 *
 * -------------------------------------------------------------------
 * DEPLOYMENT INSTRUCTIONS:
 * 1. Create a new Google Sheet (e.g., "Sci-Teach Submissions 2026").
 * 2. In the Google Sheet menu, click: Extensions -> Apps Script.
 * 3. Delete any default code in Code.gs and paste this entire file.
 * 4. (Optional) Run `initializeSheet()` once from the toolbar to set up headers.
 * 5. Click: Deploy -> New deployment.
 * 6. Under "Select type" (gear icon), select: Web app.
 *    - Description: "Sci-Teach Library Submission API"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (Required for public static submissions)
 * 7. Click: Deploy, authorize access when prompted.
 * 8. Copy the Web app URL (ends in /exec) and set it as
 *    `GOOGLE_APPS_SCRIPT_URL` at the top of `assets/js/app.js`.
 * -------------------------------------------------------------------
 */

/**
 * Handles incoming POST requests from the Contributor Portal form.
 * Parses the incoming JSON payload and appends a row with a leading timestamp.
 *
 * Expected JSON payload schema:
 * {
 *   "alias": "Juan Dela Cruz / Spartan-117",
 *   "studentId": "2024300123 / 12-STEM-Archimedes",
 *   "targetGrade": "11" | "12",
 *   "targetSubject": "Physical Science" | "General Physics" | etc.,
 *   "category": "Personal Notes/Docs" | "Readable/Text" | etc.,
 *   "topicTitle": "Topic Summary Title",
 *   "cloudLink": "https://drive.google.com/...",
 *   "description": "Learning competencies and notes..."
 * }
 *
 * @param {Object} e - The POST event containing postData
 * @returns {TextOutput} JSON response with status and CORS handling
 */
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Fallback if headers do not exist
    if (sheet.getLastRow() === 0) {
      initializeSheet();
    }

    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Append submission row with leading timestamp
    sheet.appendRow([
      new Date(),                          // Leading Timestamp
      data.alias || "Anonymous Spartan",   // Contributor Alias
      data.studentId || "N/A",             // Student ID / Section
      data.targetGrade || "N/A",           // Target Grade Level
      data.targetSubject || "N/A",         // Target Subject
      data.category || "N/A",              // Resource Category
      data.topicTitle || "Untitled",       // Topic Title
      data.cloudLink || "",                // Cloud File Link
      data.description || ""               // Description & Objectives
    ]);

    var response = {
      "status": "success",
      "message": "Study material successfully logged for officer verification."
    };

    return ContentService
      .createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    var errorResponse = {
      "status": "error",
      "message": error.toString()
    };

    return ContentService
      .createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handles incoming GET requests for health check / endpoint verification.
 *
 * @param {Object} e - The GET event
 * @returns {TextOutput} JSON response with service status
 */
function doGet(e) {
  var response = {
    "status": "active",
    "service": "Sci-Teach Library Submissions API",
    "version": "1.0.0",
    "timestamp": new Date().toISOString()
  };

  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * One-time setup helper to configure clean column headers and styles.
 * Can be run manually from the Apps Script editor.
 */
function initializeSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var headers = [
    "Timestamp",
    "Contributor Alias",
    "Student ID / Section",
    "Target Grade Level",
    "Target Subject",
    "Resource Category",
    "Topic Title",
    "Cloud File Link",
    "Description & Objectives"
  ];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#1e3a8a"); // Science Blue
    headerRange.setFontColor("#ffffff");
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, headers.length);
  }
}
