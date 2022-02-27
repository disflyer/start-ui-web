import React from 'react';

import { Button, ButtonGroup, Heading } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Page, PageBottomBar, PageContent, PageTopBar } from '@/app/layout';
import { useToastError, useToastSuccess } from '@/components';

import { UserForm } from './UserForm';
import { useUserCreate } from './users.service';

export const PageUserCreate = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const form = useForm({ subscribe: false });

  const toastError = useToastError();
  const toastSuccess = useToastSuccess();

  const { mutate: createUser, isLoading: createUserLoading } = useUserCreate({
    onError: (error) => {
      if (error.response) {
        const { title, errorKey } = error.response.data;
        toastError({
          title: t('users:create.feedbacks.updateError.title'),
          description: title,
        });
        switch (errorKey) {
          case 'userexists':
            form.invalidateFields({
              login: t('users:data.login.alreadyUsed'),
            });
            break;
          case 'emailexists':
            form.invalidateFields({
              email: t('users:data.email.alreadyUsed'),
            });
            break;
        }
      }
    },
    onSuccess: () => {
      toastSuccess({
        title: t('users:create.feedbacks.updateSuccess.title'),
      });
      navigate('/admin/users');
    },
  });

  const submitCreateUser = async (values) => {
    const newUser = {
      ...values,
    };
    await createUser(newUser);
  };

  return (
    <Page containerSize="md" isFocusMode>
      <Formiz
        id="create-user-form"
        onValidSubmit={submitCreateUser}
        connect={form}
      >
        <form noValidate onSubmit={form.submit}>
          <PageTopBar showBack onBack={() => navigate(-1)}>
            <Heading size="md">Create New Device</Heading>
          </PageTopBar>
          <PageContent>
            <UserForm />
          </PageContent>
          <PageBottomBar>
            <ButtonGroup justifyContent="space-between">
              <Button onClick={() => navigate(-1)}>
                {t('actions.cancel')}
              </Button>
              <Button
                type="submit"
                variant="@primary"
                isLoading={createUserLoading}
              >
                Create Device
              </Button>
            </ButtonGroup>
          </PageBottomBar>
        </form>
      </Formiz>
    </Page>
  );
};
