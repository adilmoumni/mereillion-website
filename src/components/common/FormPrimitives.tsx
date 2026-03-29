import React from 'react';

export type FormControlState = 'default' | 'active' | 'error' | 'filled';
export type FormSelectState = FormControlState | 'open' | 'hover' | 'done';

interface FormFieldBaseProps {
  label?: string;
  errorMessage?: string;
  helperText?: string;
  className?: string;
}

interface FormInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    FormFieldBaseProps {
  state?: FormControlState;
}

interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    FormFieldBaseProps {
  state?: FormControlState;
}

interface FormSelectOption {
  label: string;
  value: string;
}

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>, FormFieldBaseProps {
  options: FormSelectOption[];
  state?: FormSelectState;
}

const controlStateClasses: Record<FormControlState, string> = {
  default: 'form-control-default',
  active: 'form-control-active',
  error: 'form-control-error',
  filled: 'form-control-filled',
};

const selectStateClasses: Record<FormSelectState, string> = {
  default: 'form-control-default',
  active: 'form-control-active',
  error: 'form-control-error',
  filled: 'form-control-filled',
  open: 'form-select-open',
  hover: 'form-select-hover',
  done: 'form-select-done',
};

const FormFieldFrame: React.FC<FormFieldBaseProps & { children: React.ReactNode }> = ({
  label,
  helperText,
  errorMessage,
  className = '',
  children,
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label ? <label className="form-label">{label}</label> : null}
      {children}
      {errorMessage ? <p className="text-sm text-brand-error">{errorMessage}</p> : null}
      {!errorMessage && helperText ? <p className="text-sm text-brand-secondaryText50">{helperText}</p> : null}
    </div>
  );
};

export const FormInput: React.FC<FormInputProps> = ({
  label,
  helperText,
  errorMessage,
  className = '',
  state = 'default',
  ...props
}) => {
  return (
    <FormFieldFrame label={label} helperText={helperText} errorMessage={errorMessage}>
      <input className={`form-control ${controlStateClasses[state]} ${className}`} {...props} />
    </FormFieldFrame>
  );
};

export const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  helperText,
  errorMessage,
  className = '',
  state = 'default',
  rows = 4,
  ...props
}) => {
  return (
    <FormFieldFrame label={label} helperText={helperText} errorMessage={errorMessage}>
      <textarea className={`form-control ${controlStateClasses[state]} min-h-[130px] resize-y ${className}`} rows={rows} {...props} />
    </FormFieldFrame>
  );
};

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  helperText,
  errorMessage,
  className = '',
  options,
  state = 'default',
  ...props
}) => {
  return (
    <FormFieldFrame label={label} helperText={helperText} errorMessage={errorMessage}>
      <select className={`form-control form-select ${selectStateClasses[state]} ${className}`} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormFieldFrame>
  );
};

