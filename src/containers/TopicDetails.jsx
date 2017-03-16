import React, { Component, PropTypes} from 'react'
import { getTopicDetails } from '../../apis/topic'
import TopicInfo from '../components/TopicInfo'

class TopicDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      details: {}
    }
  }

  componentDidMount () {
    getTopicDetails(this.props.params.tid).then((details) => {
      this.setState({details})
    })
  }

  render () {
    const { details } = this.state
    return (
      <TopicInfo details={details} />
    )
  }
}

TopicDetails.propTypes = {
  params: PropTypes.object.isRequired
}

export default TopicDetails
