import { LoginRequest } from '@/api/user/login';
import { onError, onSuccess } from 'mock/_result';

function createFakeUserList() {
  return [
    {
      id: '1',
      username: 'admin',
      password: '123456',
      avatar: 'http://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
      description: 'manager',
      token: 'fakeToken1',
      roles: [
        {
          role: 'admin',
        },
      ],
    },
  ];
}

export default [
  {
    url: '/api/login',
    timeout: 200,
    method: 'post',
    response: (body: LoginRequest) => {
      const { username, password } = body;
      const user = createFakeUserList().find((item) => item.username === username && password === item.password);
      if (!user) {
        return onError('Incorrect account or password!', 401);
      }
      const { id, username: _username, description, roles, token } = user;
      return onSuccess({
        id,
        username,
        description,
        roles,
        token,
      });
    },
  },
];
