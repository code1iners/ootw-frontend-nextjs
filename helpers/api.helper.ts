interface Options extends RequestInit {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
}

export const makeRequest = async (url: string, options: Options) =>
  await fetch(url, options);
