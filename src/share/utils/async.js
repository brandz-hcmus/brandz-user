export async function delayTime(timeout) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(1);
      }, timeout);
    } catch (error) {
      reject(1);
    }
  });
}
