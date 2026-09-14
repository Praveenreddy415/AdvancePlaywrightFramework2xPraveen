/**
 * Flaky Test Analyzer
 * Stub implementation for CustomReporter
 */

export interface BuildSummary {
    runId: string;
    tests: Record<string, string>;
}

export interface FlakyResult {
    flaky: string[];
    summary?: string;
    counts: {
        flaky: number;
        failing: number;
        total: number;
    };
}

export async function analyzeFlaky(
    prev: BuildSummary,
    curr: BuildSummary,
    hasKey: boolean
): Promise<FlakyResult> {
    return {
        flaky: [],
        counts: {
            flaky: 0,
            failing: 0,
            total: Object.keys(curr.tests).length,
        },
    };
}
