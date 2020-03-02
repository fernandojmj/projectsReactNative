import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: #1c1c1c;

  button: {
    backgroundColor: #ff3030,
    borderRadius: 50,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  }
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eeee;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #6e8b3d;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const Data = styled.Text`
  font-size: 10px;
  color: #ffffff;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const Repos = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Repositorio = styled.Text`
  font-size: 10px;
  color: #eee;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
`;
export const Linha = styled.View`
  background-color: #9932cc;
  margin-top: 10px;
  text-align: center;
  border-radius: 50;
`;

export const Button = styled.Button`
  background-color: #ff3030;
  margin-top: 20px;
  text-align: center;
  border-radius: 50;
  color: #ffff;
`;
