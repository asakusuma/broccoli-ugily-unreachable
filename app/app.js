export default class TestService extends Service {
  serviceHasUnreachableCode() {
    if (true) {
      return;
    }
    return;
    const num = 1;
    return num;
  } 
}
export function myFunction() {
  if (true) {
    return;
  }
  return;
  const num = 1;
  return num;
}