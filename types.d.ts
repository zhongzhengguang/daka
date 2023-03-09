declare module '*module.css' {
  const styles: {
    [className: string | number]: string | number;
  };
  export default styles;
}

export interface UserData {
  users: Users[];
}
export interface Users {
  id: string;
  users: [id: string, name: string, email: string, emailVerified: null, image: string];
}
