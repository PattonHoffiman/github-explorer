export default function formatDate(string) {
  if(string) {
    const date = string.substring(0,10);
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }
}