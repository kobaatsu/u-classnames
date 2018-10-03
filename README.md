# UTILITY-CSS

## BREAK POINT / POSTFIX
  - *-xs -> `@media (max-width: 575.98px)`
  - *-sm -> `@media (min-width:576px) and (max-width: 767.98px)`
  - *-md -> `@media (min-width:768px) and (max-width: 991.98px)`
  - *-lg -> `@media (min-width:992px) and (max-width: 1199.98px)`
  - *-xl -> `@media (min-width:1200)`

## UTILITIES

### border
  - .u-bdn -> `border: none;`
  - .u-bdtn -> `border-top: none;`
  - .u-bdrn -> `border-right: none;`
  - .u-bdbn -> `border-bottom: none;`
  - .u-bdln -> `border-left: none;`

### clearfix
  - .u-cf

### margin

`[val]` には -20 ~ 100 までの数値が入る(単位 px)

```html
  <div class='u-mt30 u-mt10-xs'>hoge</div>
```

  - .u-m[val] -> `margin: [val]px;`
  - .u-mr[val] -> `margin-right: [val]px;`
  - .u-mb[val] -> `margin-bottom: [val]px;`
  - .u-ml[val] -> `margin-left: [val]px;`
  - .u-my[val] -> `margin-top: [val]px; margin-bottom: [val]px;`
  - .u-mx[val] -> `margin-right: [val]px; margin-left: [val]px;`

  - .u-ma -> `margin: auto;`
  - .u-mxa -> `margin-right: auto; margin-left: auto;`

### padding

`[val]` には 0 ~ 100 までの数値が入る(単位 px)

  - .u-p[val] -> `padding: [val]px;`
  - .u-pr[val] -> `padding-right: [val]px;`
  - .u-pb[val] -> `padding-bottom: [val]px;`
  - .u-pl[val] -> `padding-left: [val]px;`
  - .u-py[val] -> `padding-top: [val]px; padding-bottom: [val]px;`
  - .u-px[val] -> `padding-right: [val]px; padding-left: [val]px;`

### vartical-align
  - .u-vabl -> `vartical-align: baseline;`
  - .u-vat -> `vartical-align: top;`
  - .u-vam -> `vartical-align: middle;`
  - .u-vab -> `vartical-align: bottom;`
  - .u-vatb -> `vartical-align: text-bottom;`
  - .u-vatt -> `vartical-align: text-top;`
