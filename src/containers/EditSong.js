import React from 'react'
import { Redirect } from 'react-router'
import EditButton from '../components/EditButton'

class EditSong extends React.Component {
  constructor() {
    super()
    this.state = {
      fireRedirect: false,
    }
  }

  handleOnClick = () => {
    this.setState({ fireRedirect: true })
  }

  render() {
    const { fireRedirect } = this.state

    return (
      <div onClick={this.handleOnClick}>
        <EditButton />
        {fireRedirect && <Redirect to={`/songs/${this.props.id}/edit`} />}
      </div>
    )
  }
}

export default EditSong