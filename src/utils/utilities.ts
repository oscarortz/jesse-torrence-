export const getSeparateText = ({ text } : { text: string | undefined }) => {
if (!text) return;
  return text.split('\n')
}