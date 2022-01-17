export interface User {
  username: string;
  password?: string;
  token?: string;
}

export interface UserInfo {
  userId: string | number;
  username: string;
  token?: string;
  avatar: string;
  roles?: RoleInfo[];
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * 登录表单参数(用户名, 密码, 验证码)
 */
export interface LoginParams {
  username: string;
  password: string;
}
