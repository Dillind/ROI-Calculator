import React from 'react'
import { useTheme, useMessages } from "@quillforms/renderer-core";

/**
 * React Dependencies
 */
import { useEffect } from "react";

/**
 * External Dependencies
 */
import tinyColor from "tinycolor2";
import { css } from "emotion";
import classnames from "classnames";

let timer;
const MyCustomBlockDisplay = (props) => {
  const {
    id,
    attributes,
    setIsValid,
    setIsAnswered,
    setValidationErr,
    isActive,
    val,
    setVal,
    next
  } = props;

  const { required, start, end } = attributes;
  const messages = useMessages();
  const theme = useTheme();
  const answersColor = tinyColor(theme.answersColor);

  const checkfieldValidation = (value) => {
    if (required === true && (!value || value === "")) {
      setIsValid(false);
      setValidationErr(messages["label.errorAlert.required"]);
    } else {
      setIsValid(true);
      setValidationErr(null);
    }
  };

  const items = [];
  for (let i = start; i <= end; i++) {
    items.push(i);
  }

  useEffect(() => {
    if (!isActive) {
      clearTimeout(timer);
    }
  }, [isActive]);

  useEffect(() => {
    checkfieldValidation(val);
  }, [val]);

  return (
    <>
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          height: 62px;
          margin-top: 15px;
        `}
      >
        {items.map((item) => {
          return (
            <div
              key={item}
              className={classnames(
                css`
                  height: 100%;
                  @media (min-width: 768px) {
                    flex: 1 1 0%;
                  }
                  @media (max-width: 767px) {
                    min-width: 50px;
                    flex-basis: calc(${100 / items.length}% - 6px);
                  }
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  outline: none;
                  cursor: pointer;
                  user-select: none;
                  margin-right: 6px;
                  margin-bottom: 10px;
                  border-radius: 4px;
                  background-color: ${answersColor.setAlpha(0.1).toString()};
                  color: ${answersColor.setAlpha(1).toString()};
                  box-shadow: ${answersColor.setAlpha(0.6).toString()} 0px 0px
                    0px 1px inset;
                  position: relative;
                  transition: all 0.1s ease-out 0s;
                  &:hover {
                    background: ${answersColor.setAlpha(0.2).toString()};
                  }
                  &:last-child {
                    margin-right: 0;
                  }
                  &.selected {
                    background: ${tinyColor(theme.answersColor)
                      .setAlpha(0.75)
                      .toString()};
                    color: ${tinyColor(theme.answersColor).isDark()
                      ? "#fff"
                      : "#333"};
                  }
                `,
                { selected: val === item }
              )}
              onClick={() => {
                if (val !== item) {
                  setVal(item);
                  timer = setTimeout(() => {
                    setIsAnswered(true);
                    next();
                  }, 500);
                } else {
                  clearTimeout(timer);
                  setIsAnswered(false);
                  setVal("");
                }
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MyCustomBlockDisplay;
