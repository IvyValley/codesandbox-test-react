import React from "react";

export const CompleteArea = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index2) => {
            return (
              <>
                <div key={todo} class="list-row">
                  <li>{todo}</li>
                  <button onClick={() => onClickBack(index2)}>戻す</button>
                </div>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};
