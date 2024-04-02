import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput } from 'react-native';

// import { Container } from './styles';

const FormInput: React.FC = ({ control }: any) => {
  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          placeholder="Uid"
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
      )}
      name="uid"
    />
  );
};

export default FormInput;
