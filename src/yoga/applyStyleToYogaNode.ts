import { transformDimensionMapper } from '../styleTransformers/transformDimension';
import { YogaStyleProperties } from './YogaStyleProperties';

const transformFlexDirection = yoga => (value: string) => {
    switch (value) {
        case 'row':
            return yoga.FLEX_DIRECTION_ROW;
        case 'row-reverse':
            return yoga.FLEX_DIRECTION_ROW_REVERSE;
        case 'column-reverse':
            return yoga.FLEX_DIRECTION_COLUMN_REVERSE;
        default:
            return yoga.FLEX_DIRECTION_COLUMN;
    }
};

const transformAlignItems = yoga => (value: string) => {
    switch (value) {
        case 'flex-end':
            return yoga.ALIGN_FLEX_END;
        case 'center':
            return yoga.ALIGN_CENTER;
        case 'stretch':
            return yoga.ALIGN_STRETCH;
        default:
            return yoga.ALIGN_FLEX_START;
    }
};

const transformJustifyContent = yoga => (value: string) => {
    switch (value) {
        case 'flex-end':
            return yoga.JUSTIFY_FLEX_END;
        case 'center':
            return yoga.JUSTIFY_CENTER;
        case 'space-between':
            return yoga.JUSTIFY_SPACE_BETWEEN;
        case 'space-around':
            return yoga.JUSTIFY_SPACE_AROUND;
        default:
            return yoga.JUSTIFY_FLEX_START;
    }
};

export const applyStyleToYogaNode = yoga => (yogaNode, style: YogaStyleProperties) => {
    if (style.width) {
        transformDimensionMapper(style.width)
            .px(yogaNode.setWidth.bind(yogaNode))
            .percentage(yogaNode.setWidthPercent.bind(yogaNode));
    }
    if (style.height) {
        transformDimensionMapper(style.height)
            .px(yogaNode.setHeight.bind(yogaNode))
            .percentage(yogaNode.setHeightPercent.bind(yogaNode));
    }
    if (style.minWidth) {
        transformDimensionMapper(style.minWidth)
            .px(yogaNode.setMinWidth.bind(yogaNode))
            .percentage(yogaNode.setMinWidthPercent.bind(yogaNode));
    }
    if (style.maxWidth) {
        transformDimensionMapper(style.maxWidth)
            .px(yogaNode.setMaxWidth.bind(yogaNode))
            .percentage(yogaNode.setMaxWidth.bind(yogaNode));
    }
    if (style.minHeight) {
        transformDimensionMapper(style.minHeight)
            .px(yogaNode.setMinHeight.bind(yogaNode))
            .percentage(yogaNode.setMinHeightPercent.bind(yogaNode));
    }
    if (style.maxHeight) {
        transformDimensionMapper(style.maxHeight)
            .px(yogaNode.setMaxHeight.bind(yogaNode))
            .percentage(yogaNode.setMaxHeight.bind(yogaNode));
    }
    if (style.flexDirection) {
        yogaNode.setFlexDirection(transformFlexDirection(yoga)(style.flexDirection));
    }
    if (style.padding) {
        transformDimensionMapper(style.padding)
            .px(value => yogaNode.setPadding(yoga.EDGE_ALL, value))
            .percentage(value => yogaNode.setPaddingPercent(yoga.EDGE_ALL, value));
    }
    if (style.paddingTop) {
        transformDimensionMapper(style.paddingTop)
            .px(value => yogaNode.setPadding(yoga.EDGE_TOP, value))
            .percentage(value => yogaNode.setPaddingPercent(yoga.EDGE_TOP, value));
    }
    if (style.paddingBottom) {
        transformDimensionMapper(style.paddingBottom)
            .px(value => yogaNode.setPadding(yoga.EDGE_BOTTOM, value))
            .percentage(value => yogaNode.setPaddingPercent(yoga.EDGE_BOTTOM, value));
    }
    if (style.paddingLeft) {
        transformDimensionMapper(style.paddingLeft)
            .px(value => yogaNode.setPadding(yoga.EDGE_LEFT, value))
            .percentage(value => yogaNode.setPaddingPercent(yoga.EDGE_LEFT, value));
    }
    if (style.paddingRight) {
        transformDimensionMapper(style.paddingRight)
            .px(value => yogaNode.setPadding(yoga.EDGE_RIGHT, value))
            .percentage(value => yogaNode.setPaddingPercent(yoga.EDGE_RIGHT, value));
    }
    if (style.paddingVertical) {
        transformDimensionMapper(style.paddingVertical)
            .px(value => yogaNode.setPadding(yoga.EDGE_VERTICAL, value))
            .percentage(value => yogaNode.setPaddingPercent(yoga.EDGE_VERTICAL, value));
    }
    if (style.paddingHorizontal) {
        transformDimensionMapper(style.paddingHorizontal)
            .px(value => yogaNode.setPadding(yoga.EDGE_HORIZONTAL, value))
            .percentage(value => yogaNode.setPaddingPercent(yoga.EDGE_HORIZONTAL, value));
    }
    if (style.marginTop) {
        transformDimensionMapper(style.marginTop)
            .px(value => yogaNode.setMargin(yoga.EDGE_TOP, value))
            .percentage(value => yogaNode.setMarginPercent(yoga.EDGE_TOP, value));
    }
    if (style.marginBottom) {
        transformDimensionMapper(style.marginBottom)
            .px(value => yogaNode.setMargin(yoga.EDGE_BOTTOM, value))
            .percentage(value => yogaNode.setMarginPercent(yoga.EDGE_BOTTOM, value));
    }
    if (style.marginLeft) {
        transformDimensionMapper(style.marginLeft)
            .px(value => yogaNode.setMargin(yoga.EDGE_LEFT, value))
            .percentage(value => yogaNode.setMarginPercent(yoga.EDGE_LEFT, value));
    }
    if (style.marginRight) {
        transformDimensionMapper(style.marginRight)
            .px(value => yogaNode.setMargin(yoga.EDGE_RIGHT, value))
            .percentage(value => yogaNode.setMarginPercent(yoga.EDGE_RIGHT, value));
    }
    if (style.borderWidth) {
        yogaNode.setBorder(yoga.EDGE_ALL, style.borderWidth);
    }
    yogaNode.setAlignItems(transformAlignItems(yoga)(style.alignItems));
    yogaNode.setJustifyContent(transformJustifyContent(yoga)(style.justifyContent));
};
