// Utility functions for date calculations and formatting

export const MONTHS_ES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const MONTHS_EN = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface ParsedPeriod {
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  isPresent: boolean;
}

/**
 * Parse an existing period string to extract dates
 * Format: "MM/YYYY – MM/YYYY X años y Y meses" or "MM/YYYY – Presente X años y Y meses"
 */
export function parsePeriod(period: string): ParsedPeriod {
  // Match pattern: MM/YYYY – MM/YYYY or MM/YYYY – Presente/Present
  const match = period.match(/(\d{2})\/(\d{4})\s*[–-]\s*(.+?)(?:\s+\d+|$)/);

  if (match) {
    const [, startMonth, startYear, end] = match;

    if (end.includes("Presente") || end.includes("Present")) {
      return {
        startMonth,
        startYear,
        endMonth: "",
        endYear: "",
        isPresent: true,
      };
    }

    const endMatch = end.match(/(\d{2})\/(\d{4})/);
    if (endMatch) {
      const [, endMonth, endYear] = endMatch;
      return {
        startMonth,
        startYear,
        endMonth,
        endYear,
        isPresent: false,
      };
    }
  }

  // Default values
  const currentYear = new Date().getFullYear().toString();
  return {
    startMonth: "01",
    startYear: currentYear,
    endMonth: "",
    endYear: "",
    isPresent: true,
  };
}

/**
 * Calculate duration between two dates in years and months
 */
export function calculateDuration(
  startMonth: string,
  startYear: string,
  endMonth: string,
  endYear: string,
  isPresent: boolean,
  language: "es" | "en",
): string {
  const startMonthNum = parseInt(startMonth);
  const startYearNum = parseInt(startYear);

  let endMonthNum: number;
  let endYearNum: number;

  if (isPresent) {
    const now = new Date();
    endMonthNum = now.getMonth() + 1; // JavaScript months are 0-indexed
    endYearNum = now.getFullYear();
  } else {
    endMonthNum = parseInt(endMonth);
    endYearNum = parseInt(endYear);
  }

  // Calculate total months
  let years = endYearNum - startYearNum;
  let months = endMonthNum - startMonthNum;

  if (months < 0) {
    years--;
    months += 12;
  }

  // Format the duration string
  if (language === "es") {
    if (years > 0 && months > 0) {
      return `${years} año${years > 1 ? "s" : ""} y ${months} mes${months > 1 ? "es" : ""}`;
    } else if (years > 0) {
      return `${years} año${years > 1 ? "s" : ""}`;
    } else if (months > 0) {
      return `${months} mes${months > 1 ? "es" : ""}`;
    } else {
      return "1 mes";
    }
  } else {
    if (years > 0 && months > 0) {
      return `${years} year${years > 1 ? "s" : ""} and ${months} month${months > 1 ? "s" : ""}`;
    } else if (years > 0) {
      return `${years} year${years > 1 ? "s" : ""}`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? "s" : ""}`;
    } else {
      return "1 month";
    }
  }
}

/**
 * Build the complete period string with duration
 */
export function buildPeriodString(
  startMonth: string,
  startYear: string,
  endMonth: string,
  endYear: string,
  isPresent: boolean,
  language: "es" | "en",
): string {
  // Validación: asegurar que tenemos datos mínimos
  if (!startMonth || !startYear) {
    return language === "es" ? "Fecha no especificada" : "Date not specified";
  }

  const duration = calculateDuration(
    startMonth,
    startYear,
    endMonth,
    endYear,
    isPresent,
    language,
  );
  const presentText = language === "es" ? "Presente" : "Present";

  if (isPresent) {
    return `${startMonth}/${startYear} – ${presentText} ${duration}`;
  } else {
    // Validar que tenemos fecha de fin
    if (!endMonth || !endYear) {
      return `${startMonth}/${startYear} – ${presentText} ${duration}`;
    }
    return `${startMonth}/${startYear} – ${endMonth}/${endYear} ${duration}`;
  }
}
