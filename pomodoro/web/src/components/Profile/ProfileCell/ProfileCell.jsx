import Profile from 'src/components/Profile/Profile'

export const QUERY = gql`
  query FindProfileById($id: Int!) {
    profile: profile(id: $id) {
      id
      createdAt
      userId
      workDuration
      breakDuration
      email
      firstName
      lastName
      phone
      lastLogin
      currentStreak
      soundEnabled
      autoStart
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Profile not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ profile }) => {
  return <Profile profile={profile} />
}
