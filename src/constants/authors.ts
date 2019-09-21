export interface IAuthor {
  username: string
  displayName: string
  avatarImageUrl: string
  introduction: string
}

export const authors: IAuthor[] = [
  {
    username: 'tonyfromundefined',
    displayName: 'Tony',
    avatarImageUrl: '',
    introduction: '국회에서 의결된 법률안은 정부에 이송되어 15일 이내에 대통령이 공포한다. 감사원은 세입·세출의 결산을 매년 검사하여 대통령과 차년도국회에 그 결과를 보고하여야 한다.',
  },
]
