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
