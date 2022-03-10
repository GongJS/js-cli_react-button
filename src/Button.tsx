import React from "react";
import classNames from "classnames";
import "./style/index.less";

export interface IButtonProps {
  /**
   *  Button 点击时的回调
   */
  onClick?: React.MouseEventHandler;

  /**
   *  尺寸
   */
  size?: "small" | "medium" | "large";

  /**
   *  类型
   */
  type?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "light"
    | "dark";

  /**
   * 是否展示圆角
   */
  round?: boolean;

  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 跳转链接
   */
  href?: string;

  /**
   * class
   */
  className?: string;

  /**
   * style
   */
  style?: React.CSSProperties;

  /**
   * children
   */
  children?: React.ReactNode;
}

/** 按钮 */
export const Button = (props: IButtonProps) => {
  const {
    className: tempClassName,
    style,
    onClick,
    children,
    round,
    type,
    href,
    disabled,
  } = props;

  const className = classNames(
    {
      "br-button": true,
      "br-button-primary": type === "primary",
      "br-button-secondary": type === "secondary",
      "br-button-text-secondary": type === 'secondary',
      "br-button-round": round,
      "br-button-disabled": disabled,
    },
    tempClassName
  );

  if (href) {
    return (
      <a className={className} style={style} onClick={onClick} href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={onClick}
        disabled={disabled}
      >
        <span className="pony-button__content">{children}</span>
      </button>
    );
  }
};

Button.defaultProps = {
    size: "medium",
    type: "primary",
    round: false,
    disabled: false,
    href: '',
    className: '',
    style: {},
    children: null,
}
