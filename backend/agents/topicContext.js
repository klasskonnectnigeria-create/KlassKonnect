// Matches the machine-readable correctness marker that practice.js/assessment.js instruct
// the model to append as the last line of every response (see their system prompts'
// "CORRECTNESS SIGNAL" section). Anchored to the end of the string since the model is told
// to always put it last.
const CORRECTNESS_MARKER = /\n?\s*\[\[CORRECTNESS:\s*(CORRECT|INCORRECT|NONE)\]\]\s*$/i;

// Strips the correctness marker out of a raw model response and turns it into a real,
// typed signal - true/false when the model explicitly judged an answer, null when it
// didn't (a new question, a hint, or the marker was missing entirely). Never infer
// correctness from response wording - null is the honest answer when there's no marker.
export function extractCorrectness(rawContent) {
  const match = rawContent.match(CORRECTNESS_MARKER);
  if (!match) {
    return { content: rawContent.trim(), isCorrect: null };
  }
  const content = rawContent.slice(0, match.index).trimEnd();
  const verdict = match[1].toUpperCase();
  const isCorrect = verdict === 'CORRECT' ? true : verdict === 'INCORRECT' ? false : null;
  return { content, isCorrect };
}

// Shared formatting for the topic-grounding block injected into every agent's system prompt.
export function formatTopicContext(topicContext) {
  if (!topicContext) return '';

  const lines = [
    `Subject: ${topicContext.subject}`,
    `Topic: ${topicContext.name}`,
    `Learning Outcome: ${topicContext.learning_outcome}`
  ];

  if (topicContext.focal_competency) lines.push(`Focal Competency: ${topicContext.focal_competency}`);
  if (topicContext.knowledge) lines.push(`Knowledge points to cover:\n${topicContext.knowledge}`);
  if (topicContext.skills) lines.push(`Skills to build:\n${topicContext.skills}`);
  if (topicContext.competencies) lines.push(`Competencies: ${topicContext.competencies}`);
  if (topicContext.values) lines.push(`Values: ${topicContext.values}`);
  if (topicContext.activities && topicContext.activities.length > 0) {
    lines.push(`Suggested learning activities:\n${topicContext.activities.join('\n')}`);
  }
  if (topicContext.evaluationGuide) lines.push(`Evaluation Guide: ${topicContext.evaluationGuide}`);

  return lines.join('\n');
}
