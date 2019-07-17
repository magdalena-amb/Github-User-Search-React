class User extends React.Component {
    render() {
      return (
        <div className="User">
          <img src={this.props.user.avatar_url} style={{maxWidth: '100px'}}/>
          <a href={this.props.user.html_url} target="_blank">{this.props.user.login}</a>
        </div>
      );
    }
  }