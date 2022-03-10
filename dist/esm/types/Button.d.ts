import React from "react";
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
    type?: "primary" | "secondary" | "tertiary" | "danger" | "success" | "warning" | "info" | "light" | "dark";
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
export declare const Button: {
    (props: IButtonProps): JSX.Element;
    defaultProps: {
        size: string;
        type: string;
        round: boolean;
        disabled: boolean;
        href: string;
        className: string;
        style: {};
        children: null;
    };
};
