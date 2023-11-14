const ChatTemplate = ({messages=[]}) => {
  return (
    <div className="content">
          <div className="card">
            <div className="card-header">Chat</div>
            <div className="card-body height3">
              <ul className="chat-list">
                {messages.map((m, i) => {
                  return <li key={i} className={m.fromMe? "out":"in"}>
                    <div className="chat-img" >
                      <img
                        alt="Avtar"
                        src={m.avatar}
                      />
                    </div>
                    
                    <div className="chat-body">
                      <div className="chat-message">
                        <h5 className="name">{m.name}</h5>
                        <p>{m.message}</p>
                        {!!m.image&&<img className= "media-img" src={m.image}/>}
                      </div>
                    </div>
                  </li>
                })}
              </ul>
            </div>
          </div>
        </div>

  )
}

export default ChatTemplate