/**
 * Flaky Test Analyzer
 * Stub implementation for CustomReporter
 */

export interface BuildSummary {
    id: string;
    tests: unknown[];
}

export interface FlakyResult {
    flaky: unknown[];
}

export async function analyzeFlaky(
    prev: BuildSummary,
    curr: BuildSummary,
    hasKey: boolean
): Promise<FlakyResult> {
    return {
        flaky: []
    };
}
