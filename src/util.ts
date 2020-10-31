import localforage from "localforage";

// used to make suspense work for data fetching
export function wrapPromise(promise: Promise<any>) {
  let status = "pending";
  let result: any;
  let suspender = promise.then(
    (r: any) => {
      status = "success";
      result = r;
    },
    (e: any) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

export async function updateLocalStorage(key: string, newValue: any) {
  try {
    const currentValue: any = await localforage.getItem(key);
    const updatedValue = { ...currentValue, ...newValue };
    const res = await localforage.setItem(key, updatedValue);
    return res;
  } catch (error) {
    return error;
  }
}
