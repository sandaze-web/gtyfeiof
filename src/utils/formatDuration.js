export function formatDuration (minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    let result = "";
    if (hours > 0) result += `${hours}ч. `;
    if (mins > 0) result += `${mins} мин.`;

    return result.trim();
}