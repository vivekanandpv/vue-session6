export const square = (n: number): number => n * n;

export const getAreaOfCircle = (r: number) => {
  if (r < 0) {
    throw new Error('Negative radius is not allowed');
  }

  return 3.1415926535 * r * r;
};

export const students: any[] = [];

export const addStudent = (s: any): void => {
  students.push(s);
};

export const getPromise = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(100);
    }, 1000);
  });
};
