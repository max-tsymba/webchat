import jwt from 'jsonwebtoken';
import Token from '../models/Token/Token';
import { IToken } from '../models/Token/Token.interface';

class TokenService {
  generateTokens = (
    payload: unknown,
  ): { accessToken: string; refreshToken: string } => {
    const accessToken: string = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {
      expiresIn: '30m',
    });

    const refreshToken: string = jwt.sign(
      payload,
      process.env.JWT_REFRESH_KEY,
      {
        expiresIn: '30d',
      },
    );

    return {
      accessToken,
      refreshToken,
    };
  };

  saveTokens = async (userId: any, refreshToken: string): Promise<IToken> => {
    await Token.findOne({ user: userId })
      .exec()
      .then((tokenData: IToken) => {
        tokenData.refresh_token = refreshToken;
        return tokenData.save();
      })
      .catch((error: unknown) => {
        return error;
      });

    const newToken: IToken = new Token({
      user: userId,
      refresh_token: refreshToken,
    });

    await newToken.save();

    return newToken;
  };

  removeToken = async (refreshToken: string) => {
    const tokenData = await Token.deleteOne({ refresh_token: refreshToken });

    return tokenData;
  };
}

export default new TokenService();
